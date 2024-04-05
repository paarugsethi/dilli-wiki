import styles from "./Body.module.css"
import Bodybox from "./Bodybox";
import supabase from "../supabaseClient";
import { useEffect, useState } from "react";


async function fetchCategories(){
    try{
        let { data: categories, error } = await supabase
        .from('categories')
        .select("id, name, emoji, places (id, name, href)");

    if (error) {
        console.error('There is an error', error);
        return [];
    }

    // console.log("Initial", categories)
    return categories;
    
    } catch (error) {
        console.error('There is an error', error)
        return[];
    }
}

export default function Body() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(data => {
            // console.log("Fetched Categories", data);
            setCategories(data);
        });
    }, []);

    return (
        <>
            <div className={styles.mainbodydiv}>
                <Bodybox categories={categories} />

            </div>
            <div className={styles.footerDiv}>
                <p>
                    Have more places in mind? Share them <a href="https://airtable.com/apphy3M7GYj9sJXGm/pagWrl7lQguxCb2mH/form" target="_blank" rel="noopener noreferrer">here</a>!
                </p>
                <p>
                    Made by <a href="https://twitter.com/paarugsethi" target="_blank" rel="noopener noreferrer">@paarugsethi</a>.
                </p>
            </div>
        </>
    );
}