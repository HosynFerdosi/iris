import type { ComponentProps } from "react"
import type { FieldValues } from "react-hook-form"
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { BooleanGroupControlField, type ControlFieldProps } from "../controller"

type FieldOptions = {
	label: string
	value: string
	description?: string
	disabled?: boolean
}

type RadioGroupFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children">
	options: FieldOptions[]
} & ComponentProps<typeof RadioGroup>

function RadioGroupField<T extends FieldValues>({
	field,
	options,
	...props
}: RadioGroupFieldProps<T>) {
	return (
		<BooleanGroupControlField {...field}>
			{(control, fieldState) => {
				return (
					<RadioGroup {...control} {...props}>
						{options.map((item) => (
							<Field
								className={cn(item.disabled && "opacity-50")}
								data-invalid={fieldState.invalid}
								key={item.value}
								orientation="horizontal"
							>
								<RadioGroupItem
									aria-invalid={fieldState.invalid}
									id={`field-${control.name}-${item.value}`}
									{...item}
								/>
								<FieldContent>
									<FieldLabel
										htmlFor={`field-${control.name}-${item.value}`}
									>
										{item.label}
									</FieldLabel>
									{item.description && (
										<FieldDescription>
											{item.description}
										</FieldDescription>
									)}
								</FieldContent>
							</Field>
						))}
					</RadioGroup>
				)
			}}
		</BooleanGroupControlField>
	)
}

export { RadioGroupField }
