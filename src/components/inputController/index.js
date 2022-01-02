import React from 'react';
import { View } from 'react-native'
import { Controller } from "react-hook-form";

import { Input } from "../../components/inputBox";

export function InputController({
    name,
    placeholder,
    defaultValue,
    rules,
    control,
    errors,
    otherStyle,
    multiline,
    numberOfLines,
    keyboardType
}) {

    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
                <View>
                    <Input
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errors={errors}
                        otherStyle={otherStyle}
                        keyboardType={keyboardType}
                    />
                </View>

            )}
        />



    );
}

