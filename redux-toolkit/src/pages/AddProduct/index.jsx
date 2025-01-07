import { useState } from "react";
import { usePostNewCategoryMutation } from "../../services/ProductApi"
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css"
const AddCategory = () => {

    const [category, setCategory] = useState({ name: "", description: "" })

    const [postCategory, response] = usePostNewCategoryMutation()

    const navigate = useNavigate()
    const handleAddCategory = async (e) => {
        e.preventDefault()
        try {
            await postCategory(category)
          
            navigate("/")
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <form onSubmit={handleAddCategory}>
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' value={category.name} onChange={(e) => { setCategory({ ...category, name: e.target.value.trim() }) }} />
            <br />
            <br />
            <label htmlFor="desc">Description: </label>
            <input type="text" id='desc'
                value={category.description}
                onChange={(e) => { setCategory({ ...category, description: e.target.value.trim() }) }
                }
            />
            <br />
            <br />
            <button className={styles.add} type="submit">Add</button>
        </form>
    )
}

export default AddCategory