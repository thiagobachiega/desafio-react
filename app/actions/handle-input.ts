export function handleInput(event: { target: { name: string; value: string; }; }, post: any, setPost: any) {
        setPost({ ...post, [event.target.name]: event.target.value })

        {
            if (event.target.name == 'height' || event.target.name == 'weight')
                if (isNaN(parseFloat(Number(event.target.value).toString()))) {
                    alert("Insira somente números!")
                    event.target.value = ''
                }
        }

    }