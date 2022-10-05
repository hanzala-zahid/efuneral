# Basic Components
This library contains:
- "Content Agnostic" base components
- "Content Agnostic" composite components
- Base component styling

**EVERY COMPONENT IN THIS LIBRARY SHOULD BE IN A BASE OR COMPOSITE FOLDER**

## Content Agnostic
This library should be useable by a gumball factory to make a website. The components in here SHOULD NOT reference:
- Purchasers
- Insurance
- Funerals
- Any other non-ui related concept
This library's job is specifically to offer style-able re-useable frontend components that other libraries can then consume to create content-specific components.

## Base components
The base components are equivalent to a single html tag. An input, a label, a button, etc.

## Composite components
The composite components are base components strung together in useful repeatable ways. 
(eg. label + textbox + error message + input required symbol => labeled texbox)

## Styling
This section needs more clarity before it can be documented.
Currently, scss files are being built for each of the base components, but we may end up with a theme provider or some similar solution someday.
