import React from 'react'

<<<<<<< HEAD
function Menu() {
    return (
        <div>
            MENU JS kaka
        </div>
    )
}

export default Menu
=======
import Container from '../components/container';
import styles from '../styles/Menu.module.css'

const menu = {
    starters:{
        quinoa_coquetttas: {
            description: 'Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)',
            price: 4.95
        },
        chifa_chicharrones: {
            description: 'Slow cooked, crispy pork belly with sweet soy sauce',
            price:6.95
        },
        calamares: {
            description: 'Crispy baby squid with pickled jalapeño miso salsa',
            price:6.95
        }
    },
    main_courses:{
        el_clasico: {
            description: 'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)',
            price:8.95
        },
        tiradito_callao: {
            description: 'Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies',
            price: 8.95
        }
    
    },
    sides:{
        super_pollo: {
            description:'Marinated corn fed chicken pieces with rocotto salsa',
            price: 4.95
        },
        patatas_fritas: {
            description: 'Sweet potato fries with aji rocotto mayonnaise (v)',
            price: 3.95
        }
    },
    desserts:{
        icecream: {
            description: 'Lorem ipsum dolor sit amet salerma petrum sea',
            price: 3.95
        },
        tiramisu: {
            description: 'Lorem ipsum dolor sit amet salerma petrum sea',
            price: 3.95
        },
        chocolate_brownie: {
            description: 'Lorem ipsum dolor sit amet salerma petrum sea',
            price: 3.95
        }
    }
}
    



function Menu() {
    console.log(menu)
    return (
       <Container>
           <div className={styles.titleContainer}>
               <h1 className={styles.title}>OUR MENU</h1>
               <p className={styles.knowMore}>KNOW MORE</p>
           </div>
       </Container>
    )
}

export default Menu;
>>>>>>> 7994ab3fa1bd05cfc51b57058c63d39f03966ed8
