import { FormGroup, Icon, InputGroup } from "@blueprintjs/core"

function Form() {
  return (
    <FormGroup label="Name" labelFor="name">
      <InputGroup placeholder="Enter your name" rightElement={<Icon icon="add" />} />
    </FormGroup>
  )
}

export default Form