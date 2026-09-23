import type { ComponentProps, ReactNode } from "react"
import type { FieldValues } from "react-hook-form"
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group"
import { type ControlFieldProps, TextControlField } from "../controller"

type InputFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children">
	startAddon?: ReactNode
	endAddon?: ReactNode
} & ComponentProps<"input">

function InputField<T extends FieldValues>({
	field,
	startAddon,
	endAddon,
	...props
}: InputFieldProps<T>) {
	return (
		<TextControlField {...field}>
			{(control, fieldState) => (
				<InputGroup>
					{startAddon && (
						<InputGroupAddon align="inline-start">
							{startAddon}
						</InputGroupAddon>
					)}
					<InputGroupInput
						aria-invalid={fieldState.invalid}
						id={`field-${control.name}`}
						{...control}
						{...props}
					/>
					{props.maxLength && (
						<InputGroupAddon align="inline-end">
							{control.value.length}/{props.maxLength}
						</InputGroupAddon>
					)}
					{endAddon && !props.maxLength && (
						<InputGroupAddon align="inline-end">
							{endAddon}
						</InputGroupAddon>
					)}
				</InputGroup>
			)}
		</TextControlField>
	)
}

export { InputField }
