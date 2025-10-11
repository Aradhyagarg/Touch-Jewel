User Authentication

Login Page

Navigate to login (click User icon or "Click Here" from signup)

Email validation (try invalid emails like "test" or "test@")

Password validation (less than 6 characters)

Empty field validation

Show/Hide password toggle

Remember me checkbox

Successful login (use any email/password that passes validation)

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

Shopping Cart

Adding Items

Click "Add to Cart" on any product card

Toast notification appears

Cart badge updates with item count

Adding same item increases quantity

Cart Page

View all cart items

Increase quantity (+)

Decrease quantity (-)

Remove item from cart

Real-time total calculation

Empty cart state (when no items)

Prices update based on selected currency

Persistence

Cart persists after page refresh

Works for both logged-in and guest users

Check localStorage

Wishlist

Adding/Removing

Click heart icon on any product card

Heart fills red when item is in wishlist

Toast notification on add/remove

Wishlist badge updates with count

Wishlist Page

View all wishlist items

Add to cart from wishlist

Remove from wishlist (click heart again)

Empty wishlist state

Item count display

Persistence

Wishlist persists after refresh

Works for guests (localStorage)

Works for logged-in users

Search Functionality

Search Bar

Type in search bar (desktop)

Press Enter or click search icon

Mobile search (hamburger menu)

Navigate to search results page

Search Results

Search by product name (e.g., "ring", "earrings")

Search by category (e.g., "necklaces", "bracelets")

Search by shape (e.g., "round", "emerald")

Results count display

No results state (try "xyz" or "test")

Add to cart from search results

Add to wishlist from search results

Test Queries
Try searching for:

ring

diamond

earrings

necklace

emerald

bracelet

stud

xyz (no results)

Currency Conversion

Currency Selector

Click currency symbol in header

Dropdown shows all currencies

Select different currency (USD, EUR, GBP, AED, INR)

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

Test Different Currencies

INR ₹ (base currency)

USD $ (×0.012)

EUR € (×0.011)

GBP £ (×0.0095)

Toast Notifications

Test all toast messages:

Login successful (green)

Logout successful (blue)

Added to cart (green)

Cart updated (green)

Removed from cart (blue)

Added to wishlist (green)

Removed from wishlist (blue)

Newsletter subscription success (green)

Invalid email error (red)

Auto-dismiss after 3 seconds

Newsletter Subscription

Footer Newsletter Form

Enter valid email

Click arrow button

Success toast notification

Form clears after submission

Enter invalid email → error toast

Empty email → error toast

Responsive Design

Mobile (< 768px)

Hamburger menu appears

Mobile search bar shows when menu open

Search functionality works

All pages are mobile-friendly

Cart/wishlist layouts adapt

Product grid becomes 1 column

Tablet (768px - 1024px)

2 column product grid

Header adjusts appropriately

All features work smoothly

Desktop (> 1024px)

Full navigation visible

Search bar in header

3-4 column product grids

Optimal spacing and layout

Test Responsiveness

Chrome DevTools (F12)

Try different devices:

iPhone SE (375px)

iPad (768px)

Desktop (1920px)

Navigation

Page Navigation

Click "NIORA" logo = Homepage

Click User icon = Login (when logged out)

Click User icon = Logout (when logged in)

Click Cart icon = Cart page

Click Heart icon = Wishlist page

"SHOP NOW" button = Signup page

"Register Here" = Signup page

"Click Here" = Login page

Browser Navigation

All pages work with browser back button

Page refresh maintains state

LocalStorage Persistence

localStorage.getItem('cart')        // Cart items
localStorage.getItem('wishlist')    // Wishlist items
localStorage.getItem('user')        // User session
localStorage.getItem('currency')    // Selected currency


Test Persistence

Add items to cart

Add items to wishlist

Change currency

Login

Refresh page (F5)

All data should persist

Product Interactions

Product Cards

Hover effect (image zoom)

Heart icon click (add to wishlist)

Heart icon shows filled when in wishlist

"Add to Cart" button

Price displays in selected currency

5-star rating display

Multiple Products

Add multiple different products

Add same product multiple times

Mix cart and wishlist items

Edge Cases & Error Handling

Test Edge Cases

Empty cart page

Empty wishlist page

Search with no results

Remove all items from cart

Decrease quantity to 0 (removes item)

Login with invalid credentials

Form submission with missing fields

Newsletter with invalid email

Form Validations

Special characters in email

Very long inputs

Password mismatch

Phone number formats