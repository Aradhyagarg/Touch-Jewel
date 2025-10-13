1 USER AUTHENTICATION
Login Page
Navigate to login (click User icon or Click Here from signup)
Email validation (try invalid emails like test or test@)
Password validation (less than 6 characters)
Empty field validation
Show or Hide password toggle
Remember me checkbox
Successful login (use any email or password that passes validation)
Toast notification on successful login
User session persists after refresh

Signup Page
All form field validations (first name, last name, email, phone, password)
Password match validation (confirm password)
Password length requirement (8+ characters)
Phone number validation
Country code selector
Account creation and automatic login
Navigate to login page

Logout
Click User icon when logged in to logout
Toast notification on logout
Session cleared from localStorage

2 SHOPPING CART
Adding Items
Click Add to Cart on any product card
Toast notification appears
Cart badge updates with item count
Adding same item increases quantity

Cart Page
View all cart items
Increase quantity
Decrease quantity
Remove item from cart
Real-time total calculation
Empty cart state when no items
Prices update based on selected currency

Persistence
Cart persists after page refresh
Works for both logged-in and guest users
Check localStorage for saved data

3 WISHLIST
Adding or Removing
Click heart icon on any product card
Heart fills red when item is in wishlist
Toast notification on add or remove
Wishlist badge updates with count

Wishlist Page
View all wishlist items
Add to cart from wishlist
Remove from wishlist
Empty wishlist state
Item count display

Persistence
Wishlist persists after refresh
Works for guests and logged-in users

4 SEARCH FUNCTIONALITY
Search Bar
Type in search bar
Press Enter or click search icon
Mobile search via hamburger menu
Navigate to search results page

Search Results
Search by product name
Search by category
Search by shape
Results count display
No results state
Add to cart from search results
Add to wishlist from search results

5 CURRENCY CONVERSION
Currency Selector
Click currency symbol in header
Dropdown shows all currencies
Select different currency
All prices update instantly

Real-time Updates
Homepage product prices
Cart page prices
Wishlist page prices
Search results prices
Cart total updates

Persistence
Selected currency persists after refresh
Check localStorage for saved currency

6 TOAST NOTIFICATIONS
Login successful
Logout successful
Added to cart
Cart updated
Removed from cart
Added to wishlist
Removed from wishlist
Newsletter subscription success
Invalid email error
Auto-dismiss after 3 seconds

7 NEWSLETTER SUBSCRIPTION
Enter valid email
Click arrow button
Success toast notification
Form clears after submission
Enter invalid email shows error
Empty email shows error

8 RESPONSIVE DESIGN
Mobile
Hamburger menu appears
Mobile search bar shows when menu open
Search functionality works
All pages are mobile-friendly
Cart and wishlist layouts adapt
Product grid becomes one column

Tablet
Two column product grid
Header adjusts appropriately
All features work smoothly

Desktop
Full navigation visible
Search bar in header
Three to four column product grids
Optimal spacing and layout

9 NAVIGATION
Click logo goes to Homepage
Click User icon goes to Login or Logout
Click Cart icon goes to Cart page
Click Heart icon goes to Wishlist page
Register or Login links work correctly
Browser back button and refresh maintain state

10 LOCALSTORAGE PERSISTENCE
Cart items stored in localStorage
Wishlist items stored in localStorage
User session stored in localStorage
Selected currency stored in localStorage
All data persists after refresh

11 PRODUCT INTERACTIONS
Hover effect for image zoom
Add to wishlist or cart works
Price displays in selected currency
Five-star rating display

12 EDGE CASES AND ERROR HANDLING
Empty cart or wishlist
Search with no results
Remove all items
Invalid login credentials
Invalid form submissions
Password mismatch
Invalid phone or email format
