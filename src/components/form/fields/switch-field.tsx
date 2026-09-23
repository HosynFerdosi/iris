import type { ComponentProps } from "react"
import type { FieldValues } from "react-hook-form"
import { Switch } from "@/components/ui/switch"
import { CheckboxControlField, type ControlFieldProps } from "../controller"

type SwitchFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children"> & {
		label: string
	}
} & ComponentProps<typeof Switch>

function SwitchField<T extends FieldValues>({
	field,
	...props
}: SwitchFieldProps<T>) {
	return (
		<CheckboxControlField {...field} align="end">
			{(control, fieldState) => (
				<Switch
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

export { SwitchField }
