import { countries } from "../../data/countries";
import styles from './Form.module.css'

export default function Form() {
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