                                Day 1
Next.js Vercel based React ka framework hai 

File Based Routing -> is ma src ma app ka andar folder bana na hai or ma us page.tsx / jsx hoga
to route ban jaye ga 

App ka andar sirf wohi folders jo routing ka liya use hoga

Layout.tsx -> Jitna bhi page (as a childern) ha layout sa guzar kr Browser per render hogay.
Header or footer ka liya use hota commonly

@/components/header -> absolute routing  ya direct src ko target kr lay ga.
../components/header -> relative routing is ma nesting folders ma kafi issue hota .

Link -> used for navigating 
Yahi sab react ma krna ka liya react-router-dom download krna parta tha lakin Next ma built in hai


for Using Image in Next 15 
apply this in tsconfig.json file in  "public/*":["./public/*"].
 
"paths": {
      "@/*": ["./src/*"],
      "public/*":["./public/*"]
    }

use <Image /> tag ya bhut optimize hai jis sa website per load nhi ata


