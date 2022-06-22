import { Validation } from "../../../../presentation/protocols/"
import { RequedFieldValidation, CompareFiedsValidation, EmailValidation, ValidationComposite } from "../../../../validation/validators"
import { makeSinupValidation } from "./singup-validation-factory"
import { EmailValidator } from "../../../../validation/protocols/email-validator"

jest.mock('../../../../validation/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
    class EmailValidatorStub implements EmailValidator {
        isValid (email: string): boolean {
            return true
        }
    }
    return new EmailValidatorStub()
}

describe('SingupValidator', () => {
    it('should call ValidationCompositor with all validations', () => {
        makeSinupValidation()
        const validations: Validation[] = []
        for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
            validations.push(new RequedFieldValidation(field)
            )
        }
        validations.push(new CompareFiedsValidation('password','passwordConfirmation'))
        validations.push(new EmailValidation('email', makeEmailValidator()))
        expect(ValidationComposite).toHaveBeenCalledWith(validations)
    })
})