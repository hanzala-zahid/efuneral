# eFuneral UI Forms

## What is in this library?
This library is a collection of form components including:
- Form Fields (Names, validation, and normalization)
- Form Sections (Collections of like fields)
- Full Forms (Collections of sections, save buttons, etc.)

These components can be drawn in by higher order applications to be used for data collection.
In this library you'll find field normalization, form validation, and form content data.

## What is **NOT** in this library?
The basic html that makes up a form is not in this library.
If you want to make changes to how our global inputs look / function, that can be done in the basic-components ui library.
This library uses inputs/labels/buttons/etc. from that library.

## How is this library (and it's supporting libraries) structured?
This library has three layers (Listed from top to bottom):
1. Full Forms
2. Form Sections
3. Form Fields
This library depends on the basic-components library which has two supporting layers (Listed from top to bottom):
1. Fields
2. Base Components
Below, each of these layers is specified, and described.

# The Five Layers of Forms

## Forms
Full forms are content-ready forms that can be pulled into an application for a no-hassle data collection experience.
### What this layer handles:
This layer brings together form sections to create full forms.
It provides a form wrapper context to child fields so that we can reduce the amount of prop-passthrough we're doing
### The form wrapper context
The form wrapper component
- Gives context to it's children
- Manages changing passed in value props
- Removes save buttons in summary mode
- Connects save buttons to form validation via react-hook-forms
- Disables full forms via a fieldset html tag over the full form
**It's important at this level to pass relevant path prefixes to field blocks (referencing a model typing)**
### Path prefixes
When we collect information, we may want the final data shape to have nested information.
For example "person.address.city"
To make this happen, you would add a path prefix "address" to the address field block.
This will cause the form field name to be "address.city" instead of "city".
Then, when the save happens, react-hook-forms will "unflatten" the shape into proper nested data.
If no prefix is passed, when the form saves, person would have a property "city" instead of a property "address" with a property "city".

## Field Blocks
This layer combines form fields that are typically together to reduce code duplication.
### What this layer handles:
- Summary construction (Using summary row from the Composite Inputs layer)
- Overriding default field behaviors
**It's important at this level to use concatenateFieldPrefix to allow for the prefixing of forms on field blocks**
**That usage should include a model typing**

## Fields
This is the lowest layer with content in it. This layer holds specific fields (Zip Code, Email, etc.)
### What this layer handles:
This layer defines field presets like zip code, and email. It handles:
- Requirement defaults
- Label string defaults
- Validation logic
- Normalization logic
- Form registration
- aria-label concatenation
- Field specific styling
This is done via react-hook-forms.
In order to reduce code duplication and lower the bar to make effective changes, a hook has been defined: "useFieldRegister"
When called, that function will return many of the properties necessary to use a composit labeled input (the next layer down).
### useFieldRegister
- Registers fields to the form
    - Combines many pieces of validation together into the react-hook-form shape
    - Attaches a required and disabled property to the input props
    - Splits the reference used by react-hook-form into a passable innerRef prop
- Unregisters fields when field names change


## Composite Inputs
This layer combines base components to make more intelligent reuseable components.
(LabeledDatePicker, LabeledTextbox, LabeledDropdown, Summary Row, etc.)
### What this layer handles:
This layer is content agnostic. It's primary purpose is to reduce verbosity in the higher layers.
This layer:
- Groups together base components
- Assigns each input a unique id, and passes that id to the input

## Base Components (CONTENT AGNOSTIC)
This layer is the html layer. It has raw inputs, labels, divs, etc.
### What this layer handles:
This layer is content agnostic.
It interacts with the virtual dom via jsx, and low level user interaction translation (e.g. typed letter -> fire normalizer, then onChange)
This layer also holds most of our styling.