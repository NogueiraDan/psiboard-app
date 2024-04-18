import { render } from '@testing-library/react-native'
import { Form } from '.'

describe('<Form/>', () => {
 it('check if show correctly user input name placeholder', () => {
  const { getByPlaceholderText } = render(<Form />)

  const inputName = getByPlaceholderText('Nome')

  expect(inputName.props.placeholder).toBeTruthy()
 })

 it('check if user data has been loaded', () => {
  const { getByTestId } = render(<Form />)

  const inputName = getByTestId('input-name')
  const inputSurName = getByTestId('input-surname')

  expect(inputName.props.value).toEqual('Jeferson')
  expect(inputSurName.props.value).toEqual('Lucas')
 })
})