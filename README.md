# react-use-hardpass [![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-use-hardpass.svg
[npm-url]: https://npmjs.org/package/react-use-hardpass

React hook to use [hardpass](https://github.com/akrawchyk/hardpass).

## install

```shell
npm install react-use-hardpass --save

# or with yarn

yarn add react-use-hardpass
```

## usage

```js
function App() {
  const [hardpassRef, hardpassOutput] = useHardpass();
  const { score, feedback } = hardpassOutput;
  const isStrong = score === 4;

  return (
    <div>
      <input ref={hardpassRef} />
      {feedback && feedback.warning && <p>{feedback.warning}</p>}
      {feedback && feedback.suggestions.length > 0 && (
        <ul>
          {feedback.suggestions.map((suggestion, key) => (
            <li key={key}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## license

[MIT © Andrew Krawchyk][license-url]

[license-url]: https://github.com/akrawchyk/react-use-hardpass/blob/master/LICENSE.md
