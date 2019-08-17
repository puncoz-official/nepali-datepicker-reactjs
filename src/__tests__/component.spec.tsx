import * as React from 'react'
import { create as rendererCreate } from 'react-test-renderer'
import Datepicker from '..'

test('Component should show \'red\' text \'Hello World!\'', () => {
    const component = rendererCreate(<Datepicker name="World"/>)
    const testInstance = component.root

    expect(testInstance.findByType(Datepicker).props.name).toBe('World')

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
