import type { ComponentProps } from "react"
import type { FieldValues } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxControlField, type ControlFieldProps } from "../controller"

type CheckboxFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children"> & {
		label: string
	}
} & ComponentProps<typeof Checkbox>

function CheckboxField<T extends FieldValues>({
	field,
	...props
}: CheckboxFieldProps<T>) {
	return (
		<CheckboxControlField {...field}>
			{(control, fieldState) => (
				<Checkbox
					aria-invalid={fieldState.invalid}
					checked={control.value}
					id={`field-${control.name}`}
					onCheckedChange={control.onChange}
					{...props}
				/>
			)}
		</CheckboxControlField>
	)
}

export { CheckboxField }
