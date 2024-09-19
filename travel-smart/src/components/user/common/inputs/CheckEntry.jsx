

const CheckEntry = ({name, value, title}) => (
    <div class="form-check">
        <input id={`filter-${name}-${value}`} class="form-check-input border-primary" type="checkbox" name={name} value={value} />
        <label for={`filter-${name}-${value}`} class="form-check-label" >
            {title}
        </label>
    </div>
)

export default CheckEntry;