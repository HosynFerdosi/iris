// pnpm dlx shadcn@latest add @reui/c-number-field-1

import type { ComponentProps } from "react"
import type { FieldValues } from "react-hook-form"
import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field"
import { type ControlFieldProps, TextControlField } from "../controller"

type NumberInputFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children">
} & ComponentProps<typeof NumberField>

function NumberInputField<T extends FieldValues>({
	field,
	...props
}: NumberInputFieldProps<T>) {
	return (
		<TextControlField {...field}>
			{({ onChange, ...control }, fieldState) => (
				<NumberField
					id={`field-${control.name}`}
					onValueChange={onChange}
					{...control}
					{...props}
				>
					<NumberFieldGroup aria-invalid={fieldState.invalid}>
						<NumberFieldDecrement />
						<NumberFieldInput />
						<NumberFieldIncrement />
					</NumberFieldGroup>
				</NumberField>
			)}
		</TextControlField>
	)
}

export { NumberInputField }
