import { ChangeEvent, useState } from "react";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import { SearchType } from "../../types";

export default function Form() {
    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className={styles.form}>

            <div className={styles.field}>
                <label htmlFor="city">Cuidad:</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Cuidad"
                    value={search.city}
                    onChange={handleChange} />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">País:</label>
                <select
                    id="country"
                    name="country"
                    onChange={handleChange}
                    value={search.country}>
                    <option value="">-- Selecione un País</option>
                    {
                        countries.map(country => (
                            <option
                                key={country.code}
                                value={country.code}>
                                {country.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="submit" value="Consultar Clima" className={styles.submit} />
        </form>
    );
};