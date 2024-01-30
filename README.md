# Calculation Toolkit

![alt text](https://calculation-toolkit.org/assets/logo.png)

`calculation-toolkit` is a comprehensive JavaScript library designed for performing a wide array of mathematical calculations. This toolkit aims to provide developers with reliable, efficient, and easy-to-use methods for handling various mathematical operations, ranging from basic arithmetic to more complex computational tasks.

For detailed documentation on all available functions and their usage, please refer to the documentation

- 📗 [API Documentation](https://calculation-toolkit.org/docs/)

[![coverage](https://coveralls.io/repos/github/ferhataltundal/calculation-toolkit/badge.svg)](https://calculation-toolkit.org/docs)
[![npm](https://badge.fury.io/js/calculation-toolkit.svg)](http://badge.fury.io/js/calculation-toolkit)

## Features

- **Wide Range of Mathematical Functions**: Includes functions for basic arithmetic, statistical analysis, algebraic calculations, and more.
- **High Performance**: Optimized for efficient computation, making it suitable for intensive mathematical processing.
- **User-Friendly Interface**: Designed with simplicity and usability in mind, ensuring easy integration into any project.
- **Cross-Platform Compatibility**: Can be used in various JavaScript environments, including browsers and Node.js.

## Installation

If you are using a browser, you can download [calculation-toolkit from GitHub](https://calculation-toolkit.org/calculation-toolkit.js/calculation-toolkit.min.js) or just hotlink to it:

    <script src="https://calculation-toolkit.org/calculation-toolkit.js/calculation-toolkit.min.js"></script>

If you are using node, you can install calculation-toolkit with [npm](https://npmjs.org/).

    npm install calculation-toolkit

Then you can include it in your code:

    const calc = require("calculation-toolkit");

or

    import calc from "calculation-toolkit"

or

    import {factorial, tempCalc} from "calculation-toolkit"

## Usage

Finding the factorial of 5

    calc.factorial(5)

Convert 25 yard to inch

    calc.lengthCalc("25 yard to in")

If you need more please visit the website: [Docs](http://calculation-toolkit.org/docs/)

## License

Copyright (c) 2024 Ferhat ALTUNDAL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
