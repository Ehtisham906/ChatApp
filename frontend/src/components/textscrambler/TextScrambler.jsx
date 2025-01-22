import { useEffect, useState, useRef } from "react";
import "./styles.css";

const TextScrambler = ({ targetWord, animationSpeed, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);
  const scramblerRef = useRef(null); // Ref to track the component

  const generateSequence = (word) => {
    const words = word.split(" ");
    const sequence = [];
    let revealed = "";

    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      for (let j = 1; j <= currentWord.length; j++) {
        const scrambled = currentWord
          .slice(0, j)
          .split("")
          .sort(() => Math.random() - 0.5)
          .join("");
        sequence.push(revealed + scrambled);
      }
      revealed += currentWord + " ";
      sequence.push(revealed.trim());
    }

    return sequence;
  };

  useEffect(() => {
    const sequence = generateSequence(targetWord);
    let currentIndex = 0;
    let timer;

    const animateText = () => {
      if (currentIndex < sequence.length) {
        setDisplayText(sequence[currentIndex]);
        currentIndex++;
        timer = setTimeout(animateText, animationSpeed);
      }
    };

    if (startAnimation) animateText();

    return () => {
      clearTimeout(timer);
    };
  }, [targetWord, animationSpeed, startAnimation]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(false); // Reset animation
            setTimeout(() => setStartAnimation(true), delay); // Restart after delay
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (scramblerRef.current) {
      observer.observe(scramblerRef.current);
    }

    return () => {
      if (scramblerRef.current) {
        observer.unobserve(scramblerRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={scramblerRef} className="scrambler">
      {displayText}
    </div>
  );
};

export default TextScrambler;
