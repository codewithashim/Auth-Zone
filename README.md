1. Context API : Shear with auth state with other components (across the appication)
2. create an UserContext
3. ContextProvider with passed children
4. set the UserContext in the index.js
5. Now to consume the context : export AuthContex from UserContex
6. Now at header or home () or anywhere else : use useConxtext hook to get info in the context

# Auth Intigration

use getAuth app from 
create a function named 