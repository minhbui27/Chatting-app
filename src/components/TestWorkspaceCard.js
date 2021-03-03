import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class WorkspaceCard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="flex items-center justify-center">
            <div>
            <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

            <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://www.environmentalscience.org/wp-content/uploads/2018/08/physics-640x416.jpg"></img>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            Workspace Name
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Last Date Editted
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
                        <p class="ml-2 text-sm">
                            Workspace Creator
                        </p>
                    </a>

                </footer>

            </article>

             </div>
             <div className="my-1 px-1 w-1/2 md:w-1/2 lg:my-3 lg:px-4 lg:w-1/2">

<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src="https://www.environmentalscience.org/wp-content/uploads/2018/08/physics-640x416.jpg"></img>
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
                Workspace Name
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            Last Date Editted
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
            <p class="ml-2 text-sm">
                Workspace Creator
            </p>
        </a>

    </footer>

</article>

 </div>
 <div className="my-1 px-1 w-1/2 md:w-1/2 lg:my-3 lg:px-4 lg:w-1/2">

<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src="https://www.environmentalscience.org/wp-content/uploads/2018/08/physics-640x416.jpg"></img>
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
                Workspace Name
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            Last Date Editted
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
            <p class="ml-2 text-sm">
                Workspace Creator
            </p>
        </a>

    </footer>

</article>

 </div>
 <div className="my-1 px-1 w-1/2 md:w-1/2 lg:my-3 lg:px-4 lg:w-1/2">

<article className="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" className="block h-auto w-full" src="https://static.wikia.nocookie.net/6f75370c-79b0-41e8-adb2-9dc612ec1f97"></img>
    </a>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
                Workspace Name
            </a>
        </h1>
        <p className="text-grey-darker text-sm">
            Last Date Editted
        </p>
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"></img>
            <p class="ml-2 text-sm">
                Workspace Creator
            </p>
        </a>

    </footer>

</article>

 </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
