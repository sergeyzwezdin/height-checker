# Height Checker

The simple tool that checks height of DOM elements and write console messages if it is not multiplie of specific number.

## Usage

1. Install the package:

```bash
> npm install height-checker
```

2. Add `data-check-height` attribute to DOM elements that should be checked:

```html
<div data-check-height="8">
</div>
```

`data-check-height` attribute should contain multiplier. If its value is empty, the default value `8` will be used.

3. Init height checker:

```javascript
import { initHeightChecker } from 'height-checker';

initHeightChecker();
```

Also, you can pass log level parameter to the method:

```javascript
initHeightChecker('info');
```

Allowed values of log level:
- log
- warn
- info
- error

The height will be checked on window resize as well as on DOM manipulation. Once element's height is not multiplie of the defined size, you will see error message in browser's console.

## License

The project is released under the [MIT License](https://raw.githubusercontent.com/sergeyzwezdin/height-checker/master/LICENSE).
