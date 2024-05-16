import { countries } from "../../data/countries";

export default function Form() {
    return (
        <form>

            <div>
                <label htmlFor="city">Cuidad:</label>
                <input type="text" name="city" id="city" placeholder="Cuidad" />
            </div>

            <div>
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

            <input type="submit" value="Consultar Clima" />
        </form>
    );
};