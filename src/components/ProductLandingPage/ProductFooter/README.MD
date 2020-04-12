Product Footer:

```jsx
<ProductFooter logo={<span>Logo goes here</span>}>
  <h1>Content Goes Here</h1>
</ProductFooter>
```

Product Footer Navigation:

```jsx
<ProductFooterNavigation
  footerNavigation={[
    {
      heading: "Heading",
      subMenuItems: [
        { children: "Cool stuff", path: "#" },
        { children: "Random feature", path: "#" },
        { children: "Team Feature", path: "#" },
        { children: "Stuff for developers", path: "#" },
        { children: "Another one", path: "#" },
        { children: "Last time", path: "#" },
      ],
    },
    {
      heading: "Resources",
      subMenuItems: [
        { children: "Resource", path: "#" },
        { children: "Resource name", path: "#" },
        { children: "Another resource", path: "#" },
        { children: "Final resource", path: "#" },
      ],
    },
  ]}
/>
```

Product Footer Navigation Element:

```jsx
<ProductFooterNavigationElement
  heading={"Heading"}
  subMenuItems={[
    { children: "Cool stuff", path: "#" },
    { children: "Random feature", path: "#" },
    { children: "Team Feature", path: "#" },
    { children: "Stuff for developers", path: "#" },
    { children: "Another one", path: "#" },
  ]}
/>
```

Product Footer Navigation Sub Menu:

```jsx
<ProductFooterNavigationSubMenu
  subMenuItems={[
    { children: "Cool stuff", path: "#" },
    { children: "Random feature", path: "#" },
    { children: "Team Feature", path: "#" },
    { children: "Stuff for developers", path: "#" },
    { children: "Another one", path: "#" },
  ]}
/>
```

Sub Menu Element:

```jsx
<SubMenuElement path={"#"}>Content Goes Here</SubMenuElement>
```
