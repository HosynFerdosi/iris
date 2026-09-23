import type { ComponentProps } from "react"
import type { FieldValues } from "react-hook-form"
import { Slider } from "@/components/ui/slider"
import { type ControlFieldProps, TextControlField } from "../controller"

export type SliderFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children">
} & ComponentProps<typeof Slider>

function SliderField<T extends FieldValues>({
	field,
	...props
}: SliderFieldProps<T>) {
	return (
		<TextControlField {...field}>
			{({ value, onChange, ...control }, fieldState) => (
				<Slider
					aria-invalid={fieldState.invalid}
					onValueChange={onChange}
					value={value}
					{...control}
					{...props}
				/>
			)}
		</TextControlField>
	)
}

export { SliderField }
