<template>
  <div id="editor"></div>
  <button @click="saveContent">💾 Save</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import "quill/dist/quill.snow.css";

const API_URL = "https://your-backend.com/api/save-content";

// Store the Quill instance and content
const quillInstance = ref(null);
const content = ref("");

// Initialize Quill on client only
onMounted(async () => {
  if (process.client) {
    const Quill = (await import("quill")).default;

    quillInstance.value = new Quill("#editor", {
      theme: "snow",
      modules: {
        toolbar: {
          container: [
            [
              "bold",
              "italic",
              "underline",
              "strike",
              "image",
              "video",
              "link",
              "code-block",
              "blockquote",
            ],
            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
          ],
        },
      },
    });
  }
});

// Save content to backend
const saveContent = async () => {
  // if (!quillInstance.value) return;

  content.value = quillInstance.value.root.innerHTML;
  console.log(content.value);

  // try {
  //   const res = await fetch(API_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       html: content.value,
  //       createdAt: new Date().toISOString(),
  //     }),
  //   });

  //   const result = await res.json();
  //   console.log("✅ Saved:", result);
  // } catch (err) {
  //   console.error("❌ Error saving content:", err);
  // }
};
</script>

<style scoped>
#editor {
  height: 400px;
  border: 1px solid #ccc;
  padding: 10px;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
