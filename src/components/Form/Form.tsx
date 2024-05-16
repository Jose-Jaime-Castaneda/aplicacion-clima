import { useState } from "react";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import { SearchType } from "../../types";

export default function Form() {
    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    })

    return (
        <form className={styles.form}>

            <div className={styles.field}>
                <label htmlFor="city">Cuidad:</label>
                <input type="text" name="city" id="city" placeholder="Cuidad" />
            </div>

            <div className={styles.field}>
                <label htmlFor="city">País:</label>
                <select name="" id="">
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