import { ChangeEvent, useState } from "react";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import { SearchType } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}

export default function Form({ fetchWeather }: FormProps) {
    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    })
    const [alert, setAlert] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }
        fetchWeather(search);
    }

    return (
        <form className={styles.form} onSubmit={hanldeSubmit}>
            {alert && <Alert>{alert}</Alert>}

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