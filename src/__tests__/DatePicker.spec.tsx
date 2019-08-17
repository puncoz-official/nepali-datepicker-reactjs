import React from "react"
import { create as rendererCreate } from "react-test-renderer"
import DatePicker from ".."

test("Component should show 'red' text 'Hello World!'", () => {
    const component = rendererCreate(<DatePicker name="World"/>)
    const testInstance = component.root

    expect(testInstance.findByType(DatePicker).props.name).toBe("World")

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
