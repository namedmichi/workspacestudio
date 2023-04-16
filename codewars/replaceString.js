const contamination = (text, char) =>
    text.replace(/[\S\s]/, char.repeat(text.length));
