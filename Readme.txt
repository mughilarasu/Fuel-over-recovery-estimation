A react app which recommends user how to save fuel cost using visual representation with highcharts

- You can download and type "npm install" to install the packages and use "npm start" to run development or "npm run build" once build ready use "serve -s build" to serve the production build 

# Components

- Analysis.jsx  
    - Estimation.jsx (where the calculation logics is present)
    - Graph.jsx (where the plot render component is present)
    - plotFunctions.jsx (where the plot is logic present)

- Calculator.jsx  
    - Estimation.jsx (where the calculation logics is present)
    - Graph.jsx (where the plot is present)

- Overview.jsx  
    - Overview.jsx (where all the components and logics are rendered, writtened)
    - Header.jsx (Header component)
    - Formula.jsx (all formula's for calculations is present here)

- Trips.jsx  
    - Trips.jsx (where all the list of trips shown)

- This Overview.jsx is exported as a module and imported in App.js wrapped within error boundary component
- Error boundary component is used to capture error and display it in the view
- In index.js we will get and create the root element, that root element will be taken from public folder index.html and then App.js is rendered

## Components Uses

- Overview               : This is a parent component where all states, method are defined and Header, Calculator, Analysis, Trips is rendered in this component as child
     - Header            : Header component
     - Formula           : This has all formula's for calculations
- Analysis               : This is a another parent component where props are passed in Estimation and rendered in this component as child
     - Estimation        : This component has the textfields and graph componnet is present
     - Graph             : This component has the graph componnet to be rendered
     - plotFunctions     : This has all the graph logics and passed to Estimation component
- Calculator             : This is a another parent component where props are passed in Estimation and rendered in this component as child
     - Estimation        : This component has the textfields and data viewing components like tableview and list
- Trips                  : Shows list of trips by trucks


## Design

- Initial Page is trips once you go inside you can see analysis page and calculator Page
- In trips page i hardcoded data for trips new york to new jersey and California to Florida, i considered it has a round trip and done calculation considering current month
- In formula page i listed all the formulas
- The graph based on value entered in the textfield (miles per hour, miles per gallon) it will plot. i used scatter plot for this for two inputs (miles per hour, miles per gallon) and one output (zero-intercept ratio).
- I used a stacked bar chart to visualize Base Revenue, Adjustment amount, Total Revenue, Cost Change, and Over-Recovery. By stacking these data points on top of each other, you can see the breakdown of the Total Revenue into its component parts.
- I followed the same for calculating all the percentage values adjustment_percentage, over_recovery_percentage_of_adjustment, implied, Over-Recovery % of Revenue using column chart
- For showing the gallons i used solid gauge 
- I used column, spline chart to compare Gallons Per Hour and Zero-Intercept Dollars Per Hour as a combination chart
- For gallons_per_hour i used line chart which shows miles_per_hour and miles_per_gallon
- I used scatter plot to show relationship between the inputs (miles per hour, miles per gallon, cost per gallon, base_price_per_unit) and the output (zero-intercept ratio)

- Formulas used

1) To calculate the Gallons per hour

   gallons_per_hour = miles_per_hour / miles_per_gallon

2) To calculate the Zero-Intercept dollars per hour

     zero_intercept_dollars_per_hour = zero_intercept_cost_per_gallon * gallons_per_hour

     where zero_intercept_cost_per_gallon is user input

3) To calculate the Implied

     implied = (zero_intercept_dollars_per_hour / base_price_per_hour) * 100

     where base_price_per_hour is user input

4) To calculate the Over recovery percentage of adjustment

     over_recovery_percentage_of_adjustment = (1-(implied / zero_intercept_ratio)) * 100

     where zero_intercept_ratio is user input or calculated automatically

5) To calculate the Gallons

     gallons = hours * gallons_per_hour

     where hours is user input

6) To calculate the Base revenue

     base_revenue = hours * base_price_per_hour

     where hours is user input

7) To calculate the Adjustment percentage

     adjustment_percentage = (((cost_per_gallon / zero_intercept_cost_per_gallon) - 1) * zero_intercept_ratio) / 100

     where cost_per_gallon, zero_intercept_ratio, zero_intercept_cost_per_gallon is user input or calculated automatically

8) To calculate the Adjustment

     adjustment = base_revenue * adjustment_percentage 

9) To calculate the Total Revenue

     total_revenue = adjustment + base_revenue

10) To calculate the Cost change

     cost_change =  gallons * (cost_per_gallon - zero_intercept_cost_per_gallon)

     where cost_per_gallon, zero_intercept_ratio, zero_intercept_cost_per_gallon is user input or calculated automatically

11) To calculate the Over recovery

     over_recovery =  adjustment - cost_change

12) To calculate the Over recovery percentage

     over_recovery_percentage =  (over_recovery / total_revenue) * 100

13) To calculate the Zero-Intercept Ratio

     zero_intercept_ratio =  (base_price_per_unit/((miles_per_hour / miles_per_gallon) * cost_per_gallon)) * 100
     
     where base_price_per_unit is user input and i fixed it as $ 3.65, we can change also. i converted it to percentage. Whenever you change base_price_per_unit the zero_intercept_ratio values will be recalculated automatically. zero_intercept_ratio values are calculated automatically

- These are the formulas i used, all functions wrapped into React useMemo Hook returns a memoized value so that it does not need to be recalculated only runs when one of its dependencies update this can improve performance and can avoid re-renders plus process expensive calculations 

## Styling

- created individual component styling, common component styling (where we use same styles in multiple places in same component)



