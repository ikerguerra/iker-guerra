/**
 * A simpler, free alternative to GSAP's SplitText.
 * Splits text into lines, words, or characters by wrapping them in spans.
 */

export class CustomSplitText {
    elements: HTMLElement[] = [];
    chars: HTMLElement[] = [];
    words: HTMLElement[] = [];
    lines: HTMLElement[] = [];
    originalContent: string[] = [];

    constructor(target: string | HTMLElement | (string | HTMLElement)[], options: { type?: string; linesClass?: string } = {}) {
        const selector = Array.isArray(target) ? target : [target];

        selector.forEach((t) => {
            if (typeof t === 'string') {
                const found = document.querySelectorAll(t);
                found.forEach((el) => this.elements.push(el as HTMLElement));
            } else {
                this.elements.push(t);
            }
        });

        this.split(options);
    }

    private split(options: { type?: string; linesClass?: string }) {
        const types = options.type || "chars,words,lines";

        this.elements.forEach((el, index) => {
            this.originalContent[index] = el.innerHTML;
            let text = el.innerText;
            el.innerHTML = "";

            // Simple implementation focusing on wrapping
            // Note: This does not handle complex nested HTML perfectly like GSAP's SplitText,
            // but works for plain text titles and paragraphs.

            if (types.includes("lines")) {
                // Line splitting is tricky without a real renderer, 
                // for now we'll just treat the whole block as one line if we can't do better
                // or just focus on words/chars which are more common for these animations.
            }

            const words = text.split(" ");
            words.forEach((word, wordIdx) => {
                const wordSpan = document.createElement("span");
                wordSpan.style.display = "inline-block";
                wordSpan.className = "split-word";

                if (types.includes("chars")) {
                    const chars = word.split("");
                    chars.forEach((char) => {
                        const charSpan = document.createElement("span");
                        charSpan.style.display = "inline-block";
                        charSpan.className = "split-char";
                        charSpan.innerText = char;
                        wordSpan.appendChild(charSpan);
                        this.chars.push(charSpan);
                    });
                } else {
                    wordSpan.innerText = word;
                }

                el.appendChild(wordSpan);
                this.words.push(wordSpan);

                if (wordIdx < words.length - 1) {
                    el.appendChild(document.createTextNode(" "));
                }
            });

            if (types.includes("lines") && options.linesClass) {
                // Basic line wrapper (wrapping the whole content for simple animations)
                const lineSpan = document.createElement("span");
                lineSpan.className = options.linesClass;
                lineSpan.style.display = "block";
                // Move children to line span
                while (el.firstChild) {
                    lineSpan.appendChild(el.firstChild);
                }
                el.appendChild(lineSpan);
                this.lines.push(lineSpan);
            }
        });
    }

    revert() {
        this.elements.forEach((el, index) => {
            el.innerHTML = this.originalContent[index];
        });
    }
}
