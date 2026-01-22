import React from 'react'

export default function Card({className, children}) {
  return (
    <div className={`card p-4 shadow-sm ${className ? className : ''}`}>
      {children}
    </div>
  )
}

/* A Reusable Wrapper Component (also often referred to as a Presentational Component or UI Container Component).

props destructuring:
function Card({ className, children })

react passes an object like this 
{
  className: "bg-dark",
  children: <p>Hello</p>
}

children is a special built-in React prop.
It represents whatever is placed between the component's opening and closing tags.

Example: 
<Card className="bg-primary">
  <h2>Hello</h2>
  <p>Welcome</p>
</Card>

react converts the above into: 

children = (
  <>
    <h2>Hello</h2>
    <p>Welcome</p>
  </>
)

className ? className : ''
The above means If className exists (is not undefined, null, or empty),
use it
otherwise use an empty string


Without the ternary operator
${className}  - this would become card p-4 shadow-sm undefined, which causes ugly invalid class names.

Each usage of a component is independent.
Card will NOT automatically contain the children or CSS from the other places where Card was used.

Think of Card like a function call
function Card({ className, children }) { ... }

<Card className="bg-red">Hi</Card>
this is the same as 
Card({
  className: "bg-red",
  children: "Hi"
});

<Card />
this is the same as 
Card({
  className: undefined,
  children: undefined
});


Important rule:
Props ONLY flow from parent → child
They NEVER flow between siblings

The parent is the component that RENDERS another component inside its JSX.
The child is the component that is being rendered inside another component.

Purpose of Reusable Wrapper Component:
1. To Avoid Repeating Code (DRY Principle)
2. To Create Consistent UI Design
3. To Separate Layout from Content
      Layout responsibility:
      spacing
      alignment
      background
      borders
      container sizing

      While children handle:
      Content responsibility:
      text
      buttons
      images
      forms

      This separation is called: Separation of concerns

4. To Make Components More Reusable
5. To Centralize Changes
    if tomorrow you change design 
    -card p-4 shadow-sm
    +card p-5 shadow-lg rounded
    You update only one file - Card.jsx,  and the whole app updates.

6. To Add Shared Behavior
    Wrappers aren’t only for CSS.

    They can also add logic:

    Example:
    function ModalWrapper({ children }) {
      useEffect(() => {
        disableScroll()
      }, [])

      return <div className="modal">{children}</div>
    }

    Now every modal:

    locks scroll
    darkens background
    animates in, automatically.

7. To Make JSX Cleaner and readable


Important: What Wrapper Components Should NOT Do

They should NOT:

❌ Contain business logic
❌ Fetch data (usually)
❌ Control app state heavily

They focus on:

✅ UI structure
✅ Presentation
✅ Composition


Every time you use <Card>...</Card>, React will wrap your content with that <div> from Card.jsx and automatically apply:

card p-4 shadow-sm, plus any extra className you pass.

Example 1: Simple usage
<Card>
  <h2>Hello</h2>
</Card>

React produces this HTML:
<div class="card p-4 shadow-sm">
  <h2>Hello</h2>
</div>

Example 2: With extra styling
<Card className="bg-dark text-white">
  <p>Product</p>
</Card>

<div class="card p-4 shadow-sm bg-dark text-white">
  <p>Product</p>
</div>

Now the wrapper has:

default Card styles
plus your custom styles


Think of Card as a "frame"

Imagine a picture frame 🖼️

Card = Frame
children = Picture inside

You can change the picture.
The frame stays the same.
*/