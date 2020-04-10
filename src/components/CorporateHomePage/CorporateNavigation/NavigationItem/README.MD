Navigation Item:

```jsx
<ul className="navbar-nav mr-auto">
  <NavigationItem active={true} path={"#"}>
    Active Navigation!
  </NavigationItem>
  <NavigationItem path={"#"}>Inactive Navigation!</NavigationItem>
  <NavigationItem
    clickAction={(event) => {
      event.preventDefault();
      alert("You clicked me!");
    }}
    path={"#"}
  >
    Click me!
  </NavigationItem>
</ul>
```
