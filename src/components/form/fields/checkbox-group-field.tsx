import type { ComponentProps } from "react"
import type { FieldValues } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import { cn } from "@/lib/utils"
import { BooleanGroupControlField, type ControlFieldProps } from "../controller"

type FieldOptions = {
	label: string
	value: string
	description?: string
	disabled?: boolean
}

type CheckboxGroupFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children">
	options: Omit<FieldOptions, "description">[]
} & ComponentProps<typeof Checkbox>

function CheckboxGroupField<T extends FieldValues>({
	field,
	options,
	...props
}: CheckboxGroupFieldProps<T>) {
	return (
		<BooleanGroupControlField {...field}>
			{(control, fieldState) => {
				const values: string[] = control.value ?? []
				return (
					<>
						{options.map((item) => (
							<Field
								data-invalid={fieldState.invalid}
								key={item.value}
								orientation="horizontal"
							>
								<Checkbox
									aria-invalid={fieldState.invalid}
									checked={values.includes(item.value)}
									disabled={item.disabled}
									id={`field-${control.name}-${item.value}`}
									onCheckedChange={(checked) => {
										if (checked) {
											control.onChange([...values, item.value])
										} else {
											control.onChange(
												values.filter((v) => v !== item.value)
											)
										}
									}}
									{...props}
								/>
								<FieldLabel
									className={cn(
										"font-normal",
										item.disabled && "opacity-50"
									)}
									htmlFor={`field-${control.name}-${item.value}`}
								>
									{item.label}
								</FieldLabel>
							</Field>
						))}
					</>
				)
			}}
		</BooleanGroupControlField>
	)
}

export { CheckboxGroupField }
