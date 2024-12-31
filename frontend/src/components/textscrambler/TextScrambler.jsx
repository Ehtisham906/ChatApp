import { useEffect, useState } from "react";
import "./styles.css";

const TextScrambler = ({ targetWord, animationSpeed, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);

  const generateSequence = (word) => {
    const words = word.split(" ");
    const sequence = [];
    let revealed = "";

    // Build sequence word by word
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];

      // Add scrambled states for the current word
      for (let j = 1; j <= currentWord.length; j++) {
        const scrambled = currentWord
          .slice(0, j)
          .split("")
          .sort(() => Math.random() - 0.5)
          .join("");
        sequence.push(revealed + scrambled);
      }

      // Add the fully unscrambled word to the revealed portion
      revealed += currentWord + " ";
      sequence.push(revealed.trim()); // Trim to remove extra space
    }

    return sequence;
  };

  useEffect(() => {
    const sequence = generateSequence(targetWord);
    let currentIndex = 0;
    let timer;

    const startAnimationTimer = setTimeout(() => {
      setStartAnimation(true);
    }, delay);

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
      clearTimeout(startAnimationTimer);
    };
  }, [targetWord, animationSpeed, delay, startAnimation]);

  return <div className="">{displayText}</div>;
};

export default TextScrambler;
