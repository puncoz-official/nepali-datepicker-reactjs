import * as React from 'react'
import { create as rendererCreate } from 'react-test-renderer'
import Hello from '..'

test('Component should show \'red\' text \'Hello World!\'', () => {
    const component = rendererCreate(<Hello name="World"/>)
    const testInstance = component.root

    expect(testInstance.findByType(Hello).props.name).toBe('World')

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
