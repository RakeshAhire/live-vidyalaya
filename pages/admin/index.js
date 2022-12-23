import { Button, FormControl, FormLabel, Input, Select, Text, useToast, VStack } from "@chakra-ui/react"
import { useState } from "react"


const index = () => {
    const [payload, setPayload] = useState({
        title: "",
        type: "",
        description: "",
        videolink: ""
    })
    const toast = useToast()
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async () => {
        if(payload.title=="" || payload.type=="" || payload.description=="" ){
        return  toast({
                position:'top',
                title: 'Not added',
                description: "Please Fill Mandatory information.",
                duration: 2000,
                isClosable: true,
                status:'error'
              })
        }
        else{
            setLoading(true)
            const res = await fetch('https://nervous-baseball-cap-tuna.cyclic.app/admin/add', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            setLoading(false)
            toast({
                position:'top',
                title: 'Added',
                description: " Information was updated",
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
              setPayload(
                {
                    title: "",
                    type: "",
                    description: "",
                    videolink: ""
                }
              )
        }
        
    }
    return (
        <>
            <VStack w={{ base: "80%", sm: "80%", md: "50%", lg: '25%' }} m="auto" mt="20px">
                <Text fontSize={{ base: "12px", sm: "12px", md: "15px", lg: '30px' }} fontWeight="bold">For Faculty</Text>
                <FormControl >
                    <FormLabel isRequired>Title</FormLabel>
                    <Input placeholder='Title' value={payload.title} name='' onChange={(e) => setPayload({ ...payload, title: e.target.value })} />
                    <FormLabel isRequired>Description</FormLabel>
                    <Input placeholder='Description' value={payload.description} name='' onChange={(e) => setPayload({ ...payload, description: e.target.value })} />
                    <FormLabel>Video Link</FormLabel>
                    <Input placeholder='Video Link' value={payload.videolink} name='' onChange={(e) => setPayload({ ...payload, videolink: e.target.value })} />
                    <FormLabel isRequired>Select type</FormLabel>
                    <Select placeholder='Select type' value={payload.type} name='' onChange={(e) => setPayload({ ...payload, type: e.target.value })}>
                        <option value='lecture'>Lecture</option>
                        <option value='assignment'>Assignment</option>
                    </Select>
                    {
                        loading ?
                            <Button
                                isLoading
                                loadingText='Submitting'
                                mt={4}
                                colorScheme='teal'
                                type='submit'
                                onClick={handleSubmit}
                                
                            >
                                Submit
                            </Button> :
                            <Button
                                mt={4}
                                colorScheme='teal'
                                type='submit'
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                    }
                </FormControl>
            </VStack>
        </>
    )
}

export default index
