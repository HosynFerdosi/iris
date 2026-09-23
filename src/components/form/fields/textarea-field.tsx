import type { ComponentProps } from "react"
import type { FieldValues } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { type ControlFieldProps, TextControlField } from "../controller"

export type TextareaFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children">
} & ComponentProps<"textarea">

function TextareaField<T extends FieldValues>({
	field,
	...props
}: TextareaFieldProps<T>) {
	return (
		<TextControlField {...field}>
			{(control, fieldState) => (
				<Textarea
					aria-invalid={fieldState.invalid}
					id={`field-${control.name}`}
					{...control}
					{...props}
				/>
			)}
		</TextControlField>
	)
}

export { TextareaField }
