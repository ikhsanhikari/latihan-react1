import { Component } from "react"
import { Form } from "react-router-dom"

export async function halamanAction() {
    console.log('jalan action')
}

export async function halamanLoad() {
    console.log('jalan load')
}

export default class Halaman extends Component {
    render() {
        return (
            <div>
                <Form method="post">
                    <button type="submit">submit</button>
                </Form>
            </div>

        )
    }

}