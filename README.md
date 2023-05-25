# Hamburger Arrow React Native Component
This is a React Native component called HamburgerArrow that implements a rotating hamburger menu icon. The icon transitions between an "arrow right" icon and a "menu" icon when pressed. It utilizes the React Native Animated API to animate the rotation of the icon.

<p align="center">
  <img src="https://imgur.com/RghVK2g.gif" style="margin-left: 40px;">
</p>


## Installation
To use this component in your React Native project, follow these steps:

> 1. Make sure you have React Native installed in your development environment.

> 2. Copy the code of the HamburgerArrow component into a file in your project.

> 3. Install the required dependencies by running the following command in your project's root directory:
```
 npm install react react-native @expo/vector-icons
```
> 4. Import the HamburgerArrow component into your desired screen or component.
```
import HamburgerArrow from './path/to/HamburgerArrow';
```
> 5. Use the HamburgerArrow component in your render method.
```
<HamburgerArrow />
```

## Usage
The HamburgerArrow component can be used to create a toggleable hamburger menu icon. When the icon is pressed, it rotates between an "arrow right" icon and a "menu" icon. The rotation animation is achieved using the React Native Animated API.

Here's an example of how you can use the HamburgerArrow component in your application:
```
import React from 'react';
import { View } from 'react-native';
import HamburgerArrow from './path/to/HamburgerArrow';

const App = () => {
  return (
    <View>
      {/* Your other components */}
      <HamburgerArrow />
      {/* Your other components */}
    </View>
  );
};

export default App;
```

## Customization
You can customize the appearance of the hamburger menu icon by modifying the styles defined in the styles object in the code. The iconContainer style defines the size and alignment of the icon, and you can adjust it according to your requirements.
```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```
****Feel free to modify these styles to match the design of your application.***

## Dependencies
This component relies on the following dependencies:
* React
* React Native
* @expo/vector-icons
Make sure to have these dependencies installed in your project as mentioned in the installation steps.

## Credits
This component utilizes icons from the @expo/vector-icons package. The "arrowright" icon is provided by the AntDesign icon set, and the "md-menu" icon is provided by the Ionicons icon set.

## License
This code is provided under the MIT License. Feel free to use and modify it according to your needs.
