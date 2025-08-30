window.addEventListener("load", () => {
  const uwuifier = new Uwuifier({
    spaces: {
      faces: 0.05,
      actions: 0,
      stutters: 0.1,
    },
    words: 1,
    exclamations: 1,
  });

  const paragraphs = document.getElementsByTagName("p");

  const tag = /<.*?>/g;
  for (let i = 0; i < paragraphs.length; i++) {
    const parts = paragraphs[i].innerHTML.split(tag);
    const tags = paragraphs[i].innerHTML.match(tag);

    let result = "";
    for (let j = 0; j < parts.length; j++) {
      result += uwuifier.uwuifySentence(parts[j]);
      if (j < parts.length - 1) {
        result += tags[j];
      }
    }
    paragraphs[i].innerHTML = result;
  }
});

// Shamelessly stolen from
// https://github.com/Schotsl/Uwuifier

const DEFAULTS = {
  WORDS: 0.9,
  SPACES: { faces: 0.04, actions: 0.02, stutters: 0.1 },
  EXCLAMATIONS: 1,
};

class Uwuifier {
  faces = [
    "(・`ω´・)",
    ";;w;;",
    "OwO",
    "UwU",
    ">w<",
    "^w^",
    "ÚwÚ",
    "^-^",
    ":3",
    "x3",
  ];

  exclamations = ["!?", "?!!", "?!?1", "!!11", "?!?!"];

  actions = [
    "*blushes*",
    "*whispers to self*",
    "*cries*",
    "*screams*",
    "*sweats*",
    "*runs away*",
    "*screeches*",
    "*walks away*",
    "*sees bulge*",
    "*looks at you*",
    "*huggles tightly*",
    "*boops your nose*",
  ];

  uwuMap = [
    [/Connecticut/g, "Connyacticut"],
    [/Florida/g, "Fowoida"],
    [/(?:r|l)/g, "w"],
    [/(?:R|L)/g, "W"],
    [/n([aeiou])/g, "ny$1"],
    [/N([aeiou])/g, "Ny$1"],
    [/N([AEIOU])/g, "Ny$1"],
    [/ove/g, "uv"],
  ];

  _wordsModifier = DEFAULTS.WORDS;
  _spacesModifier = DEFAULTS.SPACES;
  _exclamationsModifier = DEFAULTS.EXCLAMATIONS;

  /**
   * Creates an instance of the Uwuifier class with customizable modifiers for words, spaces, and exclamations.
   * @param {Object} [config] - Configuration object for the Uwuifier.
   * @param {number} [config.words=DEFAULTS.WORDS] - The modifier for word transformations.
   * @param {SpacesModifier} [config.spaces=DEFAULTS.SPACES] - The modifier for space transformations.
   * @param {number} [config.exclamations=DEFAULTS.EXCLAMATIONS] - The modifier for exclamation transformations.
   */
  constructor(
    {
      words = DEFAULTS.WORDS,
      spaces = DEFAULTS.SPACES,
      exclamations = DEFAULTS.EXCLAMATIONS,
    } = {
      words: DEFAULTS.WORDS,
      spaces: DEFAULTS.SPACES,
      exclamations: DEFAULTS.EXCLAMATIONS,
    },
  ) {
    this.wordsModifier = words;
    this.spacesModifier = spaces;
    this.exclamationsModifier = exclamations;
  }

  /**
   * Gets the current word modifier value.
   * @returns {number} The word modifier, a value between 0 and 1.
   */
  get wordsModifier() {
    return this._wordsModifier;
  }

  /**
   * Sets the word modifier value. Must be between 0 and 1.
   * @param {number} value - The word modifier value.
   * @throws Will throw an error if the value is not between 0 and 1.
   */
  set wordsModifier(value) {
    if (value < 0 || value > 1) {
      throw new Error("wordsModifier value must be a number between 0 and 1");
    }
    this._wordsModifier = value;
  }

  /**
   * Gets the current spaces modifier values.
   * @returns {SpacesModifier} The current spaces modifier object.
   */
  get spacesModifier() {
    return this._spacesModifier;
  }

  /**
   * Sets the spaces modifier values. The sum of the values must be between 0 and 1.
   * @param {SpacesModifier} value - The spaces modifier object.
   * @throws Will throw an error if the sum of the values is not between 0 and 1.
   */
  set spacesModifier(value) {
    const sum = Object.values(value).reduce((a, b) => a + b);
    if (sum < 0 || sum > 1) {
      throw new Error("spacesModifier value must be a number between 0 and 1");
    }
    this._spacesModifier = value;
  }

  /**
   * Gets the current exclamations modifier value.
   * @returns {number} The exclamations modifier, a value between 0 and 1.
   */
  get exclamationsModifier() {
    return this._exclamationsModifier;
  }

  /**
   * Sets the exclamations modifier value. Must be between 0 and 1.
   * @param {number} value - The exclamations modifier value.
   * @throws Will throw an error if the value is not between 0 and 1.
   */
  set exclamationsModifier(value) {
    if (value < 0 || value > 1) {
      throw new Error(
        "exclamationsModifier value must be a number between 0 and 1",
      );
    }
    this._exclamationsModifier = value;
  }

  /**
   * Transforms words in a sentence by applying the Uwuifier's word map transformations.
   * @param {string} sentence - The sentence to be uwuified.
   * @returns {string} The uwuified sentence with transformed words.
   */
  uwuifyWords(sentence) {
    const words = sentence.split(" ");

    const uwuifiedSentence = words
      .map((word) => {
        if (isAt(word)) return word;
        if (isUri(word)) return word;

        const seed = new Seed(word);

        for (const [oldWord, newWord] of this.uwuMap) {
          // Generate a random value for every map so words will be partly uwuified instead of not at all
          if (seed.random() > this._wordsModifier) continue;

          word = word.replace(oldWord, newWord);
        }

        return word;
      })
      .join(" ");

    return uwuifiedSentence;
  }

  /**
   * Transforms the spaces in a sentence by inserting random faces, actions, or stutters.
   * @param {string} sentence - The sentence to be uwuified.
   * @returns {string} The uwuified sentence with modified spaces.
   */
  uwuifySpaces(sentence) {
    const words = sentence.split(" ");

    const faceThreshold = this._spacesModifier.faces;
    const actionThreshold = this._spacesModifier.actions + faceThreshold;
    const stutterThreshold = this._spacesModifier.stutters + actionThreshold;

    const uwuifiedSentence = words
      .map((word, index) => {
        const seed = new Seed(word);
        const random = seed.random();

        const [firstCharacter] = word;

        if (random <= faceThreshold && this.faces && !isBreak(word)) {
          // Add random face before the word
          word += " " + this.faces[seed.randomInt(0, this.faces.length - 1)];
          checkCapital();
        } else if (
          random <= actionThreshold &&
          this.actions &&
          !isBreak(word)
        ) {
          // Add random action before the word
          word += " " +
            this.actions[seed.randomInt(0, this.actions.length - 1)];
          checkCapital();
        } else if (
          random <= stutterThreshold &&
          !isUri(word) &&
          !isBreak(word) &&
          isLetter(word[0])
        ) {
          // Add stutter with a length between 0 and 2
          const stutter = seed.randomInt(0, 2);
          return (firstCharacter + "-").repeat(stutter) + word;
        }

        function checkCapital() {
          // Check if we should remove the first capital letter
          if (firstCharacter !== firstCharacter.toUpperCase()) return;
          // if word has higher than 50% upper case
          if (getCapitalPercentage(word) > 0.5) return;

          // If it's the first word
          if (index === 0) {
            // Remove the first capital letter
            word = firstCharacter.toLowerCase() + word.slice(1);
          } else {
            const previousWord = words[index - 1];
            const previousWordLastChar = previousWord[previousWord.length - 1];
            const prevWordEndsWithPunctuation = new RegExp("[.!?\\-]").test(
              previousWordLastChar,
            );

            if (!prevWordEndsWithPunctuation) return;
            word = firstCharacter.toLowerCase() + word.slice(1);
          }
        }

        return word;
      })
      .join(" ");

    return uwuifiedSentence;
  }

  /**
   * Transforms exclamations in a sentence by replacing them with random exclamation patterns.
   * @param {string} sentence - The sentence to be uwuified.
   * @returns {string} The uwuified sentence with modified exclamations.
   */
  uwuifyExclamations(sentence) {
    const words = sentence.split(" ");
    const pattern = new RegExp("[?!]+$");

    const uwuifiedSentence = words
      .map((word) => {
        const seed = new Seed(word);

        // If there are no exclamations return
        if (
          !pattern.test(word) ||
          seed.random() > this._exclamationsModifier ||
          isBreak(word)
        ) {
          return word;
        }

        word = word.replace(pattern, "");
        word +=
          this.exclamations[seed.randomInt(0, this.exclamations.length - 1)];

        return word;
      })
      .join(" ");

    return uwuifiedSentence;
  }

  /**
   * 	Transforms a sentence by applying all uwuify transformations: words, spaces, and exclamations.
   * 	@param {string} sentence - The sentence to be fully uwuified.
   * 	@returns {string} The fully uwuified sentence.
   */
  uwuifySentence(sentence) {
    let uwuifiedString = sentence;

    uwuifiedString = this.uwuifyWords(uwuifiedString);
    uwuifiedString = this.uwuifyExclamations(uwuifiedString);
    uwuifiedString = this.uwuifySpaces(uwuifiedString);

    return uwuifiedString;
  }
}

const isLetter = (char) => {
  return /^\p{L}/u.test(char);
};

const isUpperCase = (char) => {
  return char === char.toUpperCase();
};

const isAt = (value) => {
  // Check if the first character is '@'
  const first = value.charAt(0);
  return first === "@";
};

const getCapitalPercentage = (str) => {
  let totalLetters = 0;
  let upperLetters = 0;

  for (const currentLetter of str) {
    if (!isLetter(currentLetter)) continue;

    if (isUpperCase(currentLetter)) {
      upperLetters++;
    }

    totalLetters++;
  }

  return upperLetters / totalLetters;
};

const isUri = (value) => {
  if (!value) return false;

  // Check for illegal characters
  if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) {
    return false;
  }

  // Check for hex escapes that aren't complete
  if (/%[^0-9a-f]/i.test(value) || /%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) {
    return false;
  }

  // Directly from RFC 3986
  const split = value.match(
    /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
  );

  if (!split) return false;

  const [, scheme, authority, path] = split;

  // Scheme and path are required, though the path can be empty
  if (!(scheme && scheme.length && path.length >= 0)) return false;

  // If authority is present, the path must be empty or begin with a /
  if (authority && authority.length) {
    if (!(path.length === 0 || /^\//.test(path))) return false;
  } else if (/^\/\//.test(path)) {
    // If authority is not present, the path must not start with //
    return false;
  }

  // Scheme must begin with a letter, then consist of letters, digits, +, ., or -
  if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) return false;

  return true;
};

const isBreak = (word) => {
  return word.trim() === "";
};

class Seed {
  seeder;

  constructor(seed) {
    this.seeder = this.xmur3(seed);
  }

  random(min = 0, max = 1) {
    // Make sure the minimum and maximum values are correct
    if (min > max) {
      throw new Error("The minimum value must be below the maximum value");
    }
    if (min === max) {
      throw new Error("The minimum value cannot equal the maximum value");
    }

    return this.denormalize(this.sfc32(), min, max);
  }

  randomInt(min = 0, max = 1) {
    return Math.round(this.random(min, max));
  }

  denormalize(value, min, max) {
    return value * (max - min) + min;
  }

  // https://github.com/bryc/code/blob/master/jshash/PRNGs.md
  xmur3(str) {
    let h = 1779033703 ^ str.length;

    for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = h << 13 | h >>> 19;
    }

    return () => {
      h = Math.imul(h ^ h >>> 16, 2246822507);
      h = Math.imul(h ^ h >>> 13, 3266489909);
      return (h ^= h >>> 16) >>> 0;
    };
  }

  // https://github.com/bryc/code/blob/master/jshash/PRNGs.md
  sfc32() {
    let a = this.seeder();
    let b = this.seeder();
    let c = this.seeder();
    let d = this.seeder();

    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  }
}
