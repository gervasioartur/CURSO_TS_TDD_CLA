import { Validation } from '../../../../presentation/helpers/validators/validation';
import { RequedFieldValidation } from '../../../../presentation/helpers/validators/required-field-validation';
import { ValidationComposite } from '../../../../presentation/helpers/validators/validation-composite';
import { EmailValidation } from '../../../../presentation/helpers/validators/email-validation';
import { EmailValidatorAdapter } from '../../../../utils/email-validator-adapter';
export const makeLoginValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ['email', 'password']) {
        validations.push(new RequedFieldValidation(field)
        )
    }
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
    return new ValidationComposite(validations)
}