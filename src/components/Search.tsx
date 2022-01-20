interface SearchProps {
    value: string;
    checkChange: (value: string) => unknown;
 }

export default function Search({value, checkChange}: SearchProps){
    function handleChange(e: any) {
        checkChange(e.target.value)
     }
    return(
        <div>
            <input type="text" value={value} onInput={e => handleChange(e)}/>
        </div>
    )
}