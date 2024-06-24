# Nepali Datepicker (Bikram Sambat) - React.js Component

> Nepali Datepicker (Bikram Sambat) as a ReactJS component

[![NPM](https://img.shields.io/npm/v/nepali-datepicker-reactjs.svg)](https://www.npmjs.com/package/nepali-datepicker-reactjs)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build](https://img.shields.io/travis/puncoz-official/nepali-datepicker-reactjs?logo=travis)](https://travis-ci.org/puncoz-official/nepali-datepicker-reactjs)
[![Twitter Follow](https://img.shields.io/twitter/follow/PuncozNepal?label=Follow&style=social)](https://twitter.com/PuncozNepal)

## [Demo](https://puncoz-official.github.io/nepali-datepicker-reactjs/)

![NepaliDatePicker Demo](example.png)

## Install

```bash
npm install --save nepali-datepicker-reactjs

or,

yarn add nepali-datepicker-reactjs
```

## Usage

#### For Typescript
```tsx
import React, { useState } from "react"
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/index.css"

const App = () => {
    const [date, setDate] = useState<string>("")

    return (
        <form>
            <label htmlFor="date">Date</label>
            <NepaliDatePicker inputClassName="form-control"
                              className=""
                              value={date}
                              onChange={(value: string) => setDate(value)}
                              options={{ calenderLocale: "ne", valueLocale: "en" }} />
        </form>
    )
}

export default App
```

#### For JavaScript
```jsx
import React, { useState } from "react"
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/index.css"

const App = () => {
    const [date, setDate] = useState("")

    return (
        <form>
            <label htmlFor="date">Date</label>
            <NepaliDatePicker inputClassName="form-control"
                              className=""
                              value={date}
                              onChange={(value) => setDate(value)}
                              options={{ calenderLocale: "ne", valueLocale: "en" }} />
        </form>
    )
}

export default App
```

## License

MIT © [https://github.com/puncoz-official](https://github.com/puncoz-official)
