## Information

<table>
<tr> 
<td>Package</td><td>factorial</td>
</tr>
<tr>
<td>Description</td>
<td>returns the factorial of a number</td>
</tr>
</table>

## Usage

```javascript
factorial(10) // 3628800
factorial(-10) // -3628800
factorial(0) // 1
factorial(21, {useBigInt: true}) // 51090942171709440000n
```

### Factorials greater than 18!
When calculating factorials for numbers greater than 18 (or less than -18), you should set the second argument to an object with `useBigInt` set to true. This is because the result will start to exceed Javascript's [`MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) value.

It is safe to set `useBigInt` for all values, even 18 and below, just make sure you handle the output appropriately as `BigInt` is not completely compatible with normal `Int`s.

## LICENSE

(MIT License)

Copyright (c) 2013 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/wearefractal/factorial/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

