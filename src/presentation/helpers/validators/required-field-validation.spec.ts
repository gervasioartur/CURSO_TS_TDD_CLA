import { MissingParamError } from "../../../presentation/errors"
import { RequedFieldValidation } from "./required-field-validation"

describe('RequiredField validation', () => {
    it('sould return a MissingParram error if validation fails', () => {
        const sut = new RequedFieldValidation('field')
       const error = sut.validate({ name: 'any_name' })
       expect(error).toEqual(new MissingParamError('field'))
    })
})